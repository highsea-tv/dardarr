import AppManager from '@packages/core/managers/AppManager'
import SystemManager from '@packages/core/managers/SystemManager'
import { themes } from '@packages/themes'

class Dardarr {

    public static name = 'Dardarr'
    public static version = '0.0.1'

    public static SystemManager = SystemManager
    public static AppManager = AppManager

    public static theme = themes.amber

    public static async Connect() {

        SystemManager.init && await SystemManager.init(),
        AppManager.init && await AppManager.init()

    }

}

export default Dardarr
