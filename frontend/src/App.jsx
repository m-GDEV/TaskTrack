function App() {
  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex text-white flex-row mx-5 bg-purple-500 justify-between place-items-center py-3 rounded-xl px-3 stick top-0 lg:container lg:mx-auto">
        <h1 className="font-bold text-2xl">TaskTrack</h1>
        <div className="flex flex-row gap-3">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
export default App;
