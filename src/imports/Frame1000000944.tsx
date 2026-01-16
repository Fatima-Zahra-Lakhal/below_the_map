import imgShape from "../assets/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";

function TextHeading() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Heading">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] min-h-px min-w-px not-italic relative text-[#1e1e1e] text-[24px] tracking-[-0.48px]">“I didn’t expect to like it this much.”</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
      <div className="absolute left-1/2 size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShape} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px]">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#bf5d14]">
        <p className="css-ew64yg leading-[1.4]">Claire, France</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#333] w-[min-content]">
        <p className="css-4hzbpn leading-[1.4]">We bought the pass kind of last minute. I thought it would be basic, but it wasn’t. The stories made things make sense</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Avatar />
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#faf3ea] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#a4a987] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <TextHeading />
      <Frame2 />
    </div>
  );
}