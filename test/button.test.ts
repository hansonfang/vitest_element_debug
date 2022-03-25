import { mount } from "@vue/test-utils";
import OtButton from "./button.vue";

describe("Button", () => {
  it("create", () => {
    const wrapper = mount(OtButton, {
      props: { type: "primary" },
    });
    expect(wrapper.classes()).toContain("ot-button-wrapper");
  });
})
