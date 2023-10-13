import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Register() {
    const auth = getAuth();
    const db = getDatabase();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [usernames, setUsernames] = useState({}); // read db

    useEffect(() => {
        onValue(ref(db, "usernames/"), (snapshot) => {
            const data = snapshot.val();
            setUsernames(data);
        });
    }, []);

    function generateUserInfo(uid, name, username, email, emailVerified) {
        set(ref(db, "users/" + uid), {
            info: {
                uid: uid,
                name: name,
                username: username,
                email: email,
                emailVerified: emailVerified,
                profileImage: "/images/register.png",
                accountCreated: Math.trunc(Date.now() / 1000),
                lastLogin: Math.trunc(Date.now() / 1000),
                activityStreak: 1,
            },
            projects: [
                {
                    name: "Introduction",
                    id: 0,
                    color: "#FF0000",
                    favourite: true,
                },
            ],
            sections: [
                {
                    id: 0,
                    projectId: 0,
                    name: "textbooks",
                },
            ],
            tasks: [
                {
                    name: "get textbooks",
                    id: 0,
                    projectId: 0,
                    sectionId: 0,
                    due: 1661144400,
                    doneBy: 1761144400,
                    tags: ["school, university"],
                },
            ],
        });

        set(ref(db, "usernames/" + uid), {
            username: username,
            email: email,
        });
    }

    function checkUsername() {
        let match = false;
        const usernamesArr = Object.entries(usernames);

        for (let i = 0; i < usernamesArr.length; i++) {
            if (usernamesArr[i][1].username == username) {
                match = true;
                break;
            }
        }
        return match;
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
                            !checkUsername() // if match is false
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
                        } else if (checkUsername()) {
                            toast.error(
                                "Username already in use! Please select another one."
                            );
                        } else {
                            toast.error(
                                "Please fill out all fields correctly."
                            );
                        }
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
