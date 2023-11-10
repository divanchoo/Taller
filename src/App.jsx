import Logo from "./components/logo";

const App = () => {
  return (
    <>
      <div className="bg-[url('./assets/images/bg-header-desktop.png')] bg-contain bg-no-repeat bg-white-100 min-h-screen">
        <header className="container mx-auto px-4">
          <div className="flex justify-center pt-8">
            <button><Logo /></button>
          </div>
        </header>
        <main>
          <div>
            <article className=" flex justify-center py-4" >
              <p className=" uppercase text-3xl font-semibold text-gray-700 tracking-[0.3em]  ">A History of everything you copy</p>
            </article>
            <article className="flex justify-center py-2">
              <p className="flex justify-center grow text-gray-400 text-sm">Clipboard allows you to track and organize everything you copy.Instantly <br />
                braccess your clipboard on all your devices.</p>

            </article>
            <div className=" flex justify-center py-4">
              <article></article>
              <button className="inline-block h-34 w-34 rounded bg-green-500 text-white">Download for iOS</button>
              <button className="inline-block h-34 w-34 rounded bg-blue-700 text-white">Download por Mac</button>
            </div>
            <article className=" flex justify-center py-4" >
              <p className=" uppercase text-3xl font-semibold text-gray-700 tracking-[0.3em]  ">Keep track of your snippets</p>
            </article>
            <article className="flex justify-center py-2">
              <p className="flex justify-center grow text-gray-400 text-sm">Clipboard instantly stores any item you copy in the cloud, meaning you can access <br/>
                your snippets immediately on all your devices. Our Mac and iOS apps will help you <br/>
                organize everything </p>

            </article>
            <article>

            </article>

          </div>
        </main>
      </div>
    </>
  )
}
export default App;