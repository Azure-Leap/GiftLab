export default function Service() {
    return (
      <div className="container mx-auto mb-[10%]">
        <div className="">
          <p className="md:text-[18px] sm:text-[16px] text-[#121229]  font-bold font-sans sm:text-center  max-sm:text-center max-sm:text-[14px] ">
            OUR SERVICES
          </p>
        </div>
        <div className="text-center mb-[10%]">
          <div>
            <p className="font-sans font-bold md:text-[50px] text-[#121229] sm:text-[32px] max-sm:text-[28px]  ">
              High-impact services to help your business
            </p>
          </div>
        </div>
        <div>
        <div
          className={`bg-[#e1e0ff] min-w-[30%] sm:pt-[50px] sm:pb-[43px] sm:pr-[34px] sm:pl-[34px] md:pt-[70px] md:pb-[62px] md:pr-[40px] md:pl-[40px] rounded-3xl max-sm:pt-[46px] max-sm:pb-[38px] max-sm:pr-[30px] max-sm:pl-[30px]`}
        //   style={{ background: #e1e0ff }} min-w-[85%] bsn
        //   key={i}
        >
            <div>
                <div className="">
                <img src='https://assets.website-files.com/6316200a92cc0efb7ac10dbc/6316784b5bc18b5abf6ed2e6_icon-2-services-rocket-template.webp' alt="" />
                </div>
                <div>
                <h3 className="md:text-[28px] font-bold font-sans sm:text-[20px] text-[#121229] mb-1 max-sm:text-[18px]">
                    SEO
                </h3>
                <p className="md:text-[18px] font-sans sm:text-[16px] text-[#121229] mb-2 max-sm:text-[14px]">
                Lorem ipsum dolor sit amet consecte adis adipiscing elit faucibusante veltr
                </p>
                <div className="md:text-[18px] font-bold font-sans sm:text-[16px] text-[#121229] max-sm:text-[14px]">
                    <a href='#' className="hover:text-[#7371ff]">
                    Learn More →
                    </a>
                </div>
                </div>
            </div>
        </div>
        </div>
  
        <div className="flex justify-center md:space-x-8 sm:space-x-6 mb-[10%] max-sm:space-y-2 mt-[5%] max-sm:flex-col">
          <button
            type="button"
            className="rounded-full bg-[#121229] text-[#fff] md:py-[26px] md:pr-[38px] md:pl-[38px] md:text-[18px] max-sm:text-[14px] sm:text-[16px] hover:bg-[#7371ff] sm:py-[22px] sm:pr-[32px] sm:pl-[32px] max-sm:py-[22px] max-sm:pr-[32px] max-sm:pl-[32px]  "
          >
            Get in touch&#8594;
          </button>
          <button
            type="button"
            className="rounded-full text-[#121229] border border-[#121229] md:py-[26px] md:pr-[38px] md:pl-[38px] md:text-[18px] max-sm:text-[14px] sm:text-[16px] hover:border-[#7371ff] hover:bg-[#e1e0ff] hover:text-[#7371ff] sm:py-[22px] sm:pr-[32px] sm:pl-[32px] max-sm:py-[22px] max-sm:pr-[32px] max-sm:pl-[32px] "
          >
            Our services
          </button>
        </div>
      </div>
    );
  }
  