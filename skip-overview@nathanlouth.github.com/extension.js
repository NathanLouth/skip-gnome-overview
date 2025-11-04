import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class SkipOverviewExtension {
    enable() {
        Main.overview.hide();
    }

    disable() {

    }
}
