"use client";
export default function ErrorPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitpQrzLxK59xXdjSZX9uoWZGJkyRubrLqcQ&s)",
      }}
    >
      <div className="bg-cyan-300 bg-fixed bg-opacity-70 p-6 rounded-lg text-center hover:scale-95">
        <h1 className="text-3xl font-bold ">My Error Page</h1>
        <p className="mt-4 text-black">
          There is a syntax error in your code.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-q0XttJuighO89gd-OoKD_vHhU3sqAhcDg&s"
          alt="error image"
          className="mx-auto mt-6 rounded-lg hover:scale-75"
        />
      </div>
    </div>
  );
}