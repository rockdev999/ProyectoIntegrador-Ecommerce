function Service() {
  // actualizado
  return (
    <>
      <div className="my-11 flex justify-center">
        <div className="flex flex-row gap-1 sm:gap-10 md:gap-2 lg:gap-24 xl:gap-32 2xl:gap-32">
          <div className="flex w-28 sm:w-40 md:w-60 lg:w-60 xl:w-60 2xl:w-60 flex-col items-center content-center gap-1">
            <div className="m-3 bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] xl:w-[70px] xl:h-[70px] 2xl:w-[70px] 2xl:h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img className="h-[70%] w-[70%]" src="icon-delivery.png" alt="" />
            </div>
            <div className="text-center">
              <strong className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg">
                FREE AND FAST DELIVERY
              </strong>
            </div>
            <div className="text-xs text-center md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
              Free delivery for all orders over $140
            </div>
          </div>
          <div className="flex w-28 sm:w-40 md:w-60 lg:w-60 xl:w-60 2xl:w-60 flex-col items-center content-center gap-1">
            <div className="m-3 bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] xl:w-[70px] xl:h-[70px] 2xl:w-[70px] 2xl:h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img className="h-[70%] w-[70%]" src="icon-service.png" alt="" />
            </div>
            <div className="text-center">
              <strong className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg">
                24/7 CUSTOMER SERVICE
              </strong>
            </div>
            <div className="text-xs text-center md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
              Friendly 24/7 customer support
            </div>
          </div>
          <div className="flex w-28 sm:w-40 md:w-60 lg:w-60 xl:w-60 2xl:w-60 flex-col items-center content-center gap-1">
            <div className="m-3 bg-black w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px] xl:w-[70px] xl:h-[70px] 2xl:w-[70px] 2xl:h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300">
              <img className="h-[70%] w-[70%]" src="icon-secure .png" alt="" />
            </div>
            <div className="text-center">
              <strong className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg">
                MONEY BACK GUARANTEE
              </strong>
            </div>
            <div className="text-xs text-center md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
