import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 bg-black text-white px-8 px-32 py-14 mt-32">
      <div className="flex flex-col gap-2 pr-16 lg:gap-4 2xl:pr-8">
        <h5 className="text-ll font-bold">Exclusive</h5>
        <Link className="text-sm">Subscribe</Link>
        <p className="text-sm">Get 10% off your first order</p>
        <div className="border flex gap-1 justify-between px-2 py-1 rounded">
          <input
            type="text"
            placeholder="Enter you email"
            className="bg-transparent text-xs text-white w-4/5"
          />
          <button className="flex items-center">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-medium text-lg">Support</h6>
        <p className="text-sm">
          111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
        </p>
        <p className="text-sm">exclusive@gmail.com</p>
        <p className="text-sm">+88015-88888-9999</p>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-medium text-lg">Account</h6>
        <Link className="text-sm hover:underline">My Account</Link>
        <Link className="text-sm hover:underline">Login / Register</Link>
        <Link className="text-sm hover:underline">Cart</Link>
        <Link className="text-sm hover:underline">Wishlist</Link>
        <Link className="text-sm hover:underline">Shop</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-medium text-lg">Quick Link</h6>
        <Link className="text-sm hover:underline">Privacy Policy</Link>
        <Link className="text-sm hover:underline">Terms Of Use</Link>
        <Link className="text-sm hover:underline">FAQ</Link>
        <Link className="text-sm hover:underline">Contact</Link>
      </div>
      <div className="flex flex-col gap-4 col-span-2 sm:col-span-1 items-center">
        <h6 className="font-medium text-lg">Download App</h6>
        <p className="text-xs text-slate-400">Save $3 with App New User Only</p>
        <div className="flex gap-2 w-3/5 md:w-4/5">
          <img className="w-2/5" src="QR.png" alt="" />
          <div className="flex flex-col gap-4 justify-between">
            <img
              className="border border-stone-500 rounded"
              src="play-store (1).png"
              alt=""
            />
            <img
              className="border border-stone-500 rounded"
              src="app-store.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-8 mt-2">
          <Link className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              width="24"
              height="24"
              className="bg-white rounded-full"
            >
              <g>
                <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </g>
            </svg>
          </Link>
          <Link className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              data-name="Capa 1"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="bg-white rounded-full"
            >
              <polygon points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
              <path d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              width="24"
              height="24"
              className="bg-white rounded-full"
            >
              <g>
                <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </g>
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              className="bg-white "
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
