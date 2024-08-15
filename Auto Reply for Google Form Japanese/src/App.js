import { container } from "./DI/di-config.js";

const controller = container.get('AutoReplySettingController');
controller.index();