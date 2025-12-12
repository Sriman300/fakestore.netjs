// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white mt-12 py-4 border-t">
      <p className="text-center text-yellow-500 text-sm">
         ©{new Date().getFullYear()} Created by Sriman Narayan Nayak
      </p>
    </footer>
  );
}