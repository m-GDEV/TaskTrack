import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const auth = getAuth();

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("logged in as " + user.email);
//     } else {
//         console.log("not logged in");
//     }
// });

export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const router = useRouter();

    return (
        <div className="min-h-screen bg-dpr">
            <h1>Welcome to tasktrack, please login below</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    placeholder="pass"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
                <button
                    type="submit"
                    onClick={() => {
                        signInWithEmailAndPassword(auth, email, pass)
                            .then((userCredential) => {
                                const user = userCredential.user;
                                console.log(user);
                                router.push("/app");
                            })
                            .catch((err) => {
                                const errCode = err.code;
                                const errMes = err.message;
                                console.log(errMes + "d" + errCode);
                            });
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
