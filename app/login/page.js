import { Montserrat, Lato } from 'next/font/google'
import SignInForm from './SignInForm'

const montserrat = Montserrat({ subsets: ['latin'] })
const lato = Lato({
  weight: "400",
  preload: false,
});

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col sm:flex-row lg:mb-0 lg:text-left items-center">
        <div className="container min-h-[50vh] sm:min-h-screen sm:w-8/12 flex bg-black text-white px-5 py-4 items-center">
          <div className="container signup-title-container text-center">
            <h1 className={`${montserrat.className} text-7xl font-bold`}>
              Board.
            </h1>
          </div>
        </div>

        <div className="container min-h-screen px-5 py-4 flex justify-center bg-[#F5F5F5] items-center">
          <SignInForm></SignInForm>
        </div>
      </div>
    </>
  );
}
