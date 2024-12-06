import presetMini from "@unocss/preset-mini";
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS 选项
  // 自定義你的規則或預設設置
  shortcuts: {
    center: "flex items-center justify-center",
    btnFn: "bg-#22c55e hover:bg-#1f9d4d cursor-pointer",
  },
  theme: {
    colors: {
      primary: "#00AEFF",
      gray: "#7886A0",
      btn_gray: "#EEF2FA",
      content: "#444851",
      footer_title: "#92aaf4",
      footer_content: "#506AA1",
      dark: {
        bg: "#1E2845",
        head_bg: "#1E2845",
        btn_gray: "#353F5D",
      },
    },
  },
  persets: [presetMini()],
});
