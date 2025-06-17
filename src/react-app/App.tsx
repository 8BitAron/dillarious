





function App() {
  
  const dillPickle = new URL('./assets/dillpicklevibes.png', import.meta.url).href

  return (
    <div className="h-screen w-screen bg-brinejuice flex flex-col justify-between ">
      <main className="grow-1 place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-darktext sm:text-7xl">
            Cool as a cuke.
          </h1>
          <img src={dillPickle} alt="Dillarious Logo" className="mx-auto mt-8 w-48 h-48 sm:w-128 sm:h-128" />
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-crunchwhite sm:text-5xl">
             Sharp as a spear.
          </h2>
          <p className="mt-24 text-lg font-medium  text-pretty sm:text-xl/8 bg-dillyellow text-darktext border-2 border-darktext rounded-lg p-4">
            Stay Crisp. Get Briny.
          </p>
        </div>
      </main>
      <footer className="bg-creambackground text-darktext py-4 w-screen">
        <div className="container mx-auto text-center">
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/dillarious.brine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/DillariousBrine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <p>© 2025 Dillarious</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
