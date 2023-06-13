import { GridContainer } from "@/components/grid/GridContainer";
import StaticImageCard from "@/components/grid/StaticImageCard";
import LayoutNoContainer from "@/components/ui/LayoutNoContainer";

export default function Brand() {
  return (
    <LayoutNoContainer>
      <div className="h-64 bg-slate-400 max">Banner</div>
      <div className="container mx-auto">
        <div>
          <h2 className="text-5xl">Lorem ipsum dolor sit amet.</h2>
          <p className="text-2xl">Lorem, ipsum.</p>
          <p className="text-2xl">Lorem, ipsum.</p>
        </div>
        <div>
          <GridContainer>
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
          </GridContainer>
        </div>
        <div className="flex mx-auto justify-between">
          <div className="flex">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="-4.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>arrow_left [#334]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -6679.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
                        id="arrow_left-[#334]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            PREV
          </div>

          <div className="flex">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="-4.5 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>arrow_left [#334]</title>{" "}
                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -6679.000000)"
                    fill="#000000"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
                        id="arrow_left-[#334]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            NEXT
          </div>
        </div>
      </div>
    </LayoutNoContainer>
  );
}
