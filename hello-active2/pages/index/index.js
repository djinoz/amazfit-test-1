import { gettext } from "i18n";

Page({
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, {
      x: 0,
      y: 160,
      w: 480,
      h: 80,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.WRAP,
      text: gettext("hello_message")
    });
  }
});
