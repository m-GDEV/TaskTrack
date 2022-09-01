import { getAuth, signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
    const auth = getAuth();
    const router = useRouter();

    useEffect(() => {
        signOut(auth)
            .then(() => {
                toast.success(
                    "Signed Out Sucessfully, redirecting to homepage..."
                );
                setTimeout(() => {
                    router.push("/");
                }, 1000);
            })
            .catch((err) => {
                toast.error(err);
            });
    }, []);

    return (
        <div className="min-h-screen">
            <Toaster />
        </div>
    );
}
