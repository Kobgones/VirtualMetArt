import React from "react";

function Modal({ showModal, item }) {
  return (
    <div>
      {/* modal showed on click through useState in Item */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            {/* content */}
            <div className="fullscreen bg-primary outline-none focus:outline-none">
              <div className="flex items-center justify-end rounded-b">
                <p className="text-secondary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Close
                </p>
              </div>
              {/* image showed with API */}
              <div className="">
                <div className="lg:flex lg:items-center lg:justify-between lg:p-5 h-screen">
                  <img
                    className="rounded-md h-screen w-fit lg:justify-items-center"
                    src={item.primaryImage}
                    alt={item.title}
                  />
                  <div className="p-6 lg:flex-auto lg:align-middle">
                    <h2 className="text-xl lg:text-2xl text-center my-6 text-background">
                      Title : {item.title}
                    </h2>
                    <h3 className="italic text-xl text-center mx-2 text-background">
                      Artist : {item.artistDisplayName}
                    </h3>
                    <h4 className="my-4 mt-20 text-background text-xl leading-relaxed>">
                      Date : {item.objectEndDate}
                    </h4>
                    <h4 className="my-4 text-background text-xl leading-relaxed">
                      Culture : {item.culture}
                    </h4>
                    <h4 className="my-4 text-background text-xl leading-relaxed>">
                      Department : {item.department}
                    </h4>
                    <h4 className="my-4 text-background text-xl leading-relaxed>">
                      Category : {item.objectName}
                    </h4>
                    <h4 className="my-4 text-background text-xl leading-relaxed>">
                      Technique : {item.medium}
                    </h4>
                  </div>
                </div>

                {/* close */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
}

export default Modal;
