import { ActivateAutoReplyUseCase } from '../Application/UseCase/ActivateAutoReplyUseCase.js';
import { CreateScriptUseCase } from '../Application/UseCase/CreateScriptUseCase.js';
import { DeactivateAutoReplyUseCase } from '../Application/UseCase/DeactivateAutoReplyUseCase.js';
import { GetAutoReplySettingUseCase } from '../Application/UseCase/GetAutoReplySettingUseCase.js';
import { UpdateAliasesUseCase } from '../Application/UseCase/UpdateAliasesUseCase.js';
import { UpdateInsertContentsUseCase } from '../Application/UseCase/UpdateInsertContentsUseCase.js';
import { BackgroundMessage } from '../Background/BackgroundMessage.js';
import { AppsScript } from '../Infrastracture/Api/AppsScript.js';
import { Gmail } from '../Infrastracture/Api/Gmail.js';
import { GoogleForm } from '../Infrastracture/Api/GoogleForm.js';
import { BrowserLocalStorageAutoReplySettingRepository } from '../Infrastracture/datasource/BrowserLocalStorage/BrowserLocalStorageAutoReplySettingRepository.js';
import { AutoReplySettingController } from '../Presentation/Controllers/AutoReplySettingController.js';
import { AutoReplySettingView } from '../Presentation/Views/AutoReplySettingView.js';
import { DIContainer } from './DIContainer.js';

const container = new DIContainer();

// バックグラウンド層
container.register('BackgroundMessage',BackgroundMessage);

// インフラ層
container.register(
    'AutoReplySettingRepository',
    BrowserLocalStorageAutoReplySettingRepository,
    container.get('BackgroundMessage')
);

container.register(
    'GoogleForm',
    GoogleForm,
    container.get('BackgroundMessage')
);

container.register(
    'Gmail',
    Gmail,
    container.get('BackgroundMessage')
);

container.register(
    'AppsScript',
    AppsScript,
    container.get('BackgroundMessage')
);

// ユースケース
container.register(
    'ActivateAutoReplyUseCase',
    ActivateAutoReplyUseCase,
    container.get('AutoReplySettingRepository'),
    container.get('GoogleForm'),
    container.get('Gmail')
);

container.register(
    'CreateScriptUseCase',
    CreateScriptUseCase,
    container.get('AutoReplySettingRepository'),
    container.get('AppsScript')
);

container.register(
    'DeactivateAutoReplyUseCase',
    DeactivateAutoReplyUseCase,
    container.get('AutoReplySettingRepository'),
    container.get('AppsScript')
);

container.register(
    'GetAutoReplySettingUseCase',
    GetAutoReplySettingUseCase,
    container.get('AutoReplySettingRepository')
);

container.register(
    'UpdateAliasesUseCase',
    UpdateAliasesUseCase,
    container.get('AutoReplySettingRepository'),
    container.get('Gmail')
);

container.register(
    'UpdateInsertContentsUseCase',
    UpdateInsertContentsUseCase,
    container.get('AutoReplySettingRepository'),
    container.get('GoogleForm'),
);

// ビュー
container.register('AutoReplySettingView',AutoReplySettingView);

// コントローラー 
container.register(
	'AutoReplySettingController',
	AutoReplySettingController,
	container.get('AutoReplySettingView'),
	container.get('ActivateAutoReplyUseCase'),
	container.get('CreateScriptUseCase'),
	container.get('DeactivateAutoReplyUseCase'),
	container.get('GetAutoReplySettingUseCase'),
	container.get('UpdateAliasesUseCase'),
	container.get('UpdateInsertContentsUseCase')
);

export {container};