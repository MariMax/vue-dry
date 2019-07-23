export const intersection = {
    inserted(el, bindings, vnode) {
        const observer = new IntersectionObserver((entries) => {
            if (entries.length)
                vnode.elm.dispatchEvent(new CustomEvent('intersects', {detail: entries[0].isIntersecting}));
        },
        {
            root: bindings.value || null,
        });
        observer.observe(el);
    }
}