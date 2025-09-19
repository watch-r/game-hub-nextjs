import { Suspense } from "react"; // the component using useSearchParams

export default function NotFoundPage() {
    return <Suspense fallback={<div>Loading...</div>}>NotFound </Suspense>;
}
