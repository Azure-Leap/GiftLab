import React from "react";

const Right02 = () => {
  return (
    <div>
      <div className="mt-14">
        <div className="grid grid-cols-2">
          <h5 className="text-sm text-black font-medium">Company</h5>
          <p className="justify-self-end text-sm text-slate-700 font-medium">
            Apple
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">Order Number</h5>
          <p className="justify-self-end text-sm text-slate-700 font-medium">
            1266201
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">Product</h5>
          <p className="justify-self-end text-sm text-slate-700 font-medium">
            Macbook Air
          </p>
        </div>
        <div className="grid grid-cols-2 mt-4">
          <h5 className="text-sm text-black font-medium">VAT (20%)</h5>
          <p className="justify-self-end text-sm text-slate-700 font-medium">
            $100.00
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-slate-700 mt-4">
        <div className="mt-4">
          <p className="text-sm text-black font-medium">You have to pay</p>
          <p className="text-base text-slate-700 font-medium mt-2">
            <span className="text-base font-bold text-black">549.99</span>
            USD
          </p>
        </div>
        <div className="justify-self-end place-self-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 1024 1024"
            fill="#000000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M959.018 208.158c0.23-2.721 0.34-5.45 0.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036 0.06-6.522 0.213l-611.757-0.043c-1.768-0.085-3.563-0.17-5.424-0.17-74.812 0-135.67 60.84-135.67 135.712l0.188 10.952h-0.306l0.391 594.972-0.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-0.239 7.1-0.239l608.934 0.085c2.985 0.357 6.216 0.468 9.55 0.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-0.145-12.015h0.918l-0.008-606.41z m-757.655 693.82l-2.585-0.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l0.46 485.186-0.885 2.865c-0.535 1.837-0.8 3.58-0.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816 0.621v-0.527l-615.533-0.01zM900.78 274.424H122.3l-0.375-65.934 0.85-2.924c0.52-1.82 0.782-3.63 0.782-5.247 0-42.236 34.727-76.665 78.179-76.809l0.45-0.068 618.177 0.018 2.662 0.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326 0.196 2.687 0.655 4.532l0.332 0.884v68.577z"
              fill=""
            />
            <path
              d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-0.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783 0.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z"
              fill=""
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Right02;
