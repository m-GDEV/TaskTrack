import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Register() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const router = useRouter();
    const auth = getAuth();

    // if user is already logged in, redirect to /app imediately
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/app");
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-mp text-center pt-16">
            <h1 className="text-4xl font-cabin text-lw mb-8">
                Welcome back to tasktrack, please login below
            </h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col justify-center w-fit mx-auto gap-2 "
            >
                <input
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                />
                <input
                    placeholder="Password"
                    type="password"
                    className="p-2 text-lg rounded-xl placeholder:text-lp outline-none bg-dp text-gray-200 border-lp border-4"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                />
                <button
                    type="submit"
                    className="bg-mp border-4 border-dp mt-2 px-3 py-2 text-gray-200 rounded-xl transition-all duration-300 hover:bg-lp text-xl font-bold"
                    onClick={() => {
                        if (email && pass) {
                            signInWithEmailAndPassword(auth, email, pass)
                                .then((userCredential) => {
                                    console.log(userCredential.user);
                                    router.push("/app");
                                })
                                .catch((err) => {
                                    const errCode = err.code;
                                    const errMes = err.message;
                                    console.log(errCode + ":" + errMes);
                                    toast.error(errMes);
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
