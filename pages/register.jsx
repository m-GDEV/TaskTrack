import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
    const auth = getAuth();
    const db = getDatabase();
    const dbRef = ref(db);
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");

    function generateUserInfo(uid, name, username, email, emailVerified) {
        set(ref(db, "users/" + uid), {
            info: {
                uid: uid,
                name: name,
                username: username,
                email: email,
                emailVerified: emailVerified,
                profileImage:
                    "https://cdn-icons-png.flaticon.com/512/16/16467.png",
                accountCreated: Math.trunc(Date.now() / 1000),
                lastLogin: Math.trunc(Date.now() / 1000),
                activityStreak: 1,
            },
        });

        set(ref(db, "usernames/" + uid), {
            username: username,
            email: email,
        });
    }

    function checkUsername(username) {
        const check = get(child(dbRef, `usernames/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const usernames = Object.entries(snapshot);
                    let match = false;

                    for (let i = 0; i < usernames.length; i++) {
                        if ((usernames[i][1], username == username)) {
                            toast.error(
                                "Username already in use! Please select another one."
                            );
                            match = true;
                            break;
                        }
                    }
                    return match;
                } else {
                    console.log("Snapshot does not exist");
                }
            })
            .catch((err) => {
                console.log(err);
            });

        check.then((match) => {
            return match;
        });
    }

    return (
        <div className="min-h-screen bg-mp text-center pt-16">
            <h1 className="text-4xl font-cabin text-lw mb-8">
                Welcome to tasktrack, please register below
            </h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col justify-center w-fit mx-auto gap-2 "
            >
                <input
                    placeholder="Email"
                    autoFocus
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                />
                <input
                    placeholder="Password"
                    type="password"
                    minLength="6"
                    maxLength="30"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                />
                <p className="text-sm text-red-400">
                    * Password must be 6+ characters with at least one letter
                    and number
                </p>
                <input
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                />
                <input
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                />
                <button
                    type="submit"
                    className="bg-mp border-4 border-dp mt-2 px-3 py-2 text-gray-200 rounded-xl transition-all duration-300 hover:bg-lp text-xl font-bold"
                    onClick={() => {
                        if (
                            name &&
                            email &&
                            username &&
                            pass &&
                            checkUsername(username)
                        ) {
                            createUserWithEmailAndPassword(auth, email, pass)
                                .then((userCredential) => {
                                    const user = userCredential.user;
                                    console.log(user);
                                    return user;
                                })
                                .then((user) => {
                                    generateUserInfo(
                                        user.uid,
                                        name,
                                        username,
                                        email,
                                        user.emailVerified
                                    );

                                    setTimeout(() => {
                                        toast.success(
                                            "Sucessfully Registered! Redirecting..."
                                        );
                                        router.push("/app");
                                    }, 500);
                                })
                                .catch((err) => {
                                    const errCode = err.code;
                                    const errMes = err.message;
                                    toast.error(
                                        "Error! " + errCode + " : " + errMes
                                    );
                                });
                        } else {
                            toast.error("Please fill out all fields.");
                        }
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
