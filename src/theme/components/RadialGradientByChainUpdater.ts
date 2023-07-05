import { useWeb3React } from "@web3-react/core";
import { SupportedChainId } from "constants/chains";
import { useIsNftPage } from "hooks/useIsNftPage";
import { useEffect } from "react";
import { useDarkModeManager } from "theme/components/ThemeToggle";

import { darkTheme, lightTheme } from "../colors";

const initialStyles = {
  width: "200vw",
  height: "200vh",
  transform: "translate(-50vw, -100vh)",
};
const backgroundResetStyles = {
  width: "100vw",
  height: "100vh",
  transform: "unset",
};

type TargetBackgroundStyles =
  | typeof initialStyles
  | typeof backgroundResetStyles;

const backgroundRadialGradientElement = document.getElementById(
  "background-radial-gradient"
);
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[
        key as keyof typeof backgroundResetStyles
      ] = value;
    }
  });

export default function RadialGradientByChainUpdater(): null {
  const { chainId } = useWeb3React();
  const [darkMode] = useDarkModeManager();
  const isNftPage = useIsNftPage();

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return;
    }

    if (isNftPage) {
      setBackground(initialStyles);
      backgroundRadialGradientElement.style.background = darkMode
        ? darkTheme.backgroundBackdrop
        : lightTheme.backgroundBackdrop;
      return;
    }

    switch (chainId) {
      case SupportedChainId.ARBITRUM_ONE:
      case SupportedChainId.ARBITRUM_GOERLI: {
        setBackground(backgroundResetStyles);
        const arbitrumLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(205, 232, 251, 0.7) 0%, rgba(252, 243, 249, 0.6536) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const arbitrumDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(10, 41, 75, 0.7) 0%, rgba(34, 30, 48, 0.6536) 49.48%, rgba(31, 33, 40, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? arbitrumDarkGradient
          : arbitrumLightGradient;
        break;
      }
      case SupportedChainId.OPTIMISM:
      case SupportedChainId.OPTIMISM_GOERLI: {
        setBackground(backgroundResetStyles);
        const optimismLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(255, 251, 242, 0.8) 0%, rgba(255, 244, 249, 0.6958) 50.52%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const optimismDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(62, 46, 56, 0.8) 0%, rgba(44, 31, 45, 0.6958) 50.52%, rgba(31, 33, 40, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? optimismDarkGradient
          : optimismLightGradient;
        break;
      }
      case SupportedChainId.POLYGON:
      case SupportedChainId.POLYGON_MUMBAI: {
        setBackground(backgroundResetStyles);
        const polygonLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0.2) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #FFFFFF";
        const polygonDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0.2) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? polygonDarkGradient
          : polygonLightGradient;
        break;
      }
      case SupportedChainId.CELO:
      case SupportedChainId.CELO_ALFAJORES: {
        setBackground(backgroundResetStyles);
        const celoLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(186, 228, 210, 0.7) 0%, rgba(252, 243, 249, 0.6536) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const celoDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(20, 49, 37, 0.29) 0%, rgba(12, 31, 23, 0.6536) 49.48%, rgba(31, 33, 40, 0) 100%, rgba(31, 33, 40, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? celoDarkGradient
          : celoLightGradient;
        break;
      }
      case SupportedChainId.BNB: {
        setBackground(backgroundResetStyles);
        const bscLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(242 , 186, 8, 0.1) 0%, rgba(238, 182, 6, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #FFFFFF";
        const bscDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(169, 132, 17, 0.1) 0%, rgba(128, 100, 14, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? bscDarkGradient
          : bscLightGradient;
        break;
      }

      case SupportedChainId.FANTOM: {
        setBackground(backgroundResetStyles);
        const fantomLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(195, 214, 197, 0.7) 0%, rgba(255, 255, 255, 0.6536) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const fantomDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(14, 52, 54, 0.7) 0%, rgba(13, 26, 13, 0.6536) 49.48%, rgba(13, 26, 13, 0) 100%), #0D0E0E";

        backgroundRadialGradientElement.style.background = darkMode
          ? fantomDarkGradient
          : fantomLightGradient;
        break;
      }

      case SupportedChainId.GNOSIS: {
        setBackground(backgroundResetStyles);
        const gnosisLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(242 , 186, 8, 0.1) 0%, rgba(238, 182, 6, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #FFFFFF";
        const gnosisDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(169, 132, 17, 0.1) 0%, rgba(128, 100, 14, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? gnosisDarkGradient
          : gnosisLightGradient;
        break;
      }

      case SupportedChainId.AVALANCHE: {
        setBackground(backgroundResetStyles);
        const avalancheLightGradient =
          "radial-gradient(100% 100% at 50% 0%,rgba(92, 81, 44, 0.2) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const avalancheDarkGradient =
          "radial-gradient(100% 100% at 50% 0%,rgba(255, 4, 32, 0.1) 0%, rgba(255, 4, 32, 0.16) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E";

        backgroundRadialGradientElement.style.background = darkMode
          ? avalancheDarkGradient
          : avalancheLightGradient;
        break;
      }

      case SupportedChainId.MOONBEAM: {
        setBackground(backgroundResetStyles);
        const moonbeamLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(242 , 186, 8, 0.1) 0%, rgba(238, 182, 6, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #FFFFFF";
        const moonbeamDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(169, 132, 17, 0.1) 0%, rgba(128, 100, 14, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? moonbeamDarkGradient
          : moonbeamLightGradient;
        break;
      }

      case SupportedChainId.KLAYTN: {
        setBackground(backgroundResetStyles);
        const klaytnLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(242 , 186, 8, 0.1) 0%, rgba(238, 182, 6, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #FFFFFF";
        const klaytnDarkGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(169, 132, 17, 0.1) 0%, rgba(128, 100, 14, 0.08) 50%, rgba(140, 185, 11, 0) 100%), #0D0E0E";
        backgroundRadialGradientElement.style.background = darkMode
          ? klaytnDarkGradient
          : klaytnLightGradient;
        break;
      }
      default: {
        setBackground(initialStyles);
        const defaultLightGradient =
          "radial-gradient(100% 100% at 50% 0%, rgba(145, 136, 99, 0.51) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF";
        const defaultDarkGradient =
          "linear-gradient(180deg, #5c512c 0%, #0d1a0d 50%, rgba(140, 185, 11, 0) 100%)";
        backgroundRadialGradientElement.style.background = darkMode
          ? defaultDarkGradient
          : defaultLightGradient;
      }
    }
  }, [darkMode, chainId, isNftPage]);
  return null;
}
