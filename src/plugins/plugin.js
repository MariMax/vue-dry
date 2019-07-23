import { toFixed } from "@/filters/to-fixed";
import { intersection } from "@/directives/intersection-observer";


export function install(Vue) {
    Vue.filter('toFixed', toFixed);
    Vue.directive('isInTheView', intersection);
}