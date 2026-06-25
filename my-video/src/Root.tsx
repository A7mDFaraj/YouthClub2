import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { BrandComposition } from "./BrandComposition";
import { PatternShadowsComposition } from "./PatternShadowsComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="BrandComp"
        component={BrandComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PatternShadows"
        component={PatternShadowsComposition}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
