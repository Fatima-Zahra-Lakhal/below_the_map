import imgIPhone14ProFree1 from "figma:asset/205b6bb13d4676b9db7eef820ab4a1af32b0018a.png";
import imgIPhone14ProFree11 from "figma:asset/12e3790eb30a465f2f6a58c5e54e09ec4d11f92e.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[411px] left-[178px] top-[46px] w-[206px]" data-name="iPhone 14 Pro - FREE 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105%] left-[-42.23%] max-w-none top-[-2.26%] w-[184.95%]" src={imgIPhone14ProFree1} />
        </div>
      </div>
      <div className="absolute h-[487px] left-0 top-0 w-[244px]" data-name="iPhone 14 Pro - FREE (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.95%] left-[-43.14%] max-w-none top-[-2.87%] w-[186.7%]" src={imgIPhone14ProFree11} />
        </div>
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}