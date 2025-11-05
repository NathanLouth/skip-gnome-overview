import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import GLib from 'gi://GLib';

export default class SkipOverviewExtension {
    enable() {
        GLib.timeout_add(GLib.PRIORITY_DEFAULT, 100, () => {
            Main.overview.hide();
            return GLib.SOURCE_REMOVE;
        });
    }

    disable() {

    }
}
