import { config } from "@vue/test-utils";
import ElementUI from "element-plus";

config.global.plugins = [ElementUI];
window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
