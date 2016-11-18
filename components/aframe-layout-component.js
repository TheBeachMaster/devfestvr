! function(t) {
    function e(n) { if (i[n]) return i[n].exports; var r = i[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports } var i = {}; return e.m = t, e.c = i, e.p = "", e(0) }([function(t, e) {
    function i(t, e, i) { for (var n = [], r = Math.ceil(e / t.columns), o = 0; r > o; o++)
            for (var a = 0; a < t.columns; a++) n.push([a * t.margin, o * t.margin, 0]); return n }

    function n(t, e, i) { for (var n = [], r = 0; e > r; r++) { var o = r * (2 * Math.PI) / e;
            n.push([i.x + t.radius * Math.cos(o), i.y, i.z + t.radius * Math.sin(o)]) } return n }

    function r(t, e, n) { return t.columns = e, i(t, e, n) }

    function o(t, e, i) { return u([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [-1, 0, 0],
            [0, -1, 0],
            [0, 0, -1]
        ], i, t.radius / 2) }

    function a(t, e, i) { var n = (1 + Math.sqrt(5)) / 2,
            r = 1 / n,
            o = 2 - n,
            a = -1 * r,
            s = -1 * o; return u([
            [-1, o, 0],
            [-1, s, 0],
            [0, -1, o],
            [0, -1, s],
            [0, 1, o],
            [0, 1, s],
            [1, o, 0],
            [1, s, 0],
            [r, r, r],
            [r, r, a],
            [r, a, r],
            [r, a, a],
            [o, 0, 1],
            [o, 0, -1],
            [a, r, r],
            [a, r, a],
            [a, a, r],
            [a, a, a],
            [s, 0, 1],
            [s, 0, -1]
        ], i, t.radius / 2) }

    function s(t, e, i) { var n = Math.sqrt(3),
            r = -1 / Math.sqrt(3),
            o = 2 * Math.sqrt(2 / 3); return u([
            [0, 0, n + r],
            [-1, 0, r],
            [1, 0, r],
            [0, o, 0]
        ], i, t.radius / 2) }

    function u(t, e, i) { return e = [e.x, e.y, e.z], t.map(function(t) { return t.map(function(t, n) { return t * i + e[n] }) }) }

    function c(t, e) { t.forEach(function(t, i) { var n = e[i];
            t.setAttribute("position", { x: n[0], y: n[1], z: n[2] }) }) }
    AFRAME.registerComponent("layout", { schema: { columns: { "default": 1, min: 0, "if": { type: ["box"] } }, margin: { "default": 1, min: 0, "if": { type: ["box", "line"] } }, radius: { "default": 1, min: 0, "if": { type: ["circle", "cube", "dodecahedron", "pyramid"] } }, type: { "default": "line", oneOf: ["box", "circle", "cube", "dodecahedron", "line", "pyramid"] } }, init: function() { var t = this,
                e = this.el;
            this.children = e.getChildEntities(), this.initialPositions = [], this.children.forEach(function(e) {
                function i() { var i = e.getComputedAttribute("position");
                    t.initialPositions.push([i.x, i.y, i.z]) } return e.hasLoaded ? i() : void e.addEventListener("loaded", i) }), e.addEventListener("child-attached", function(i) { i.detail.el.parentNode === e && (t.children.push(i.detail.el), t.update()) }) }, update: function(t) { var e, u, d = this.children,
                h = this.data,
                l = this.el,
                f = d.length,
                p = l.getComputedAttribute("position"); switch (h.type) {
                case "box":
                    e = i; break;
                case "circle":
                    e = n; break;
                case "cube":
                    e = o; break;
                case "dodecahedron":
                    e = a; break;
                case "pyramid":
                    e = s; break;
                default:
                    e = r }
            u = e(h, f, p), c(d, u) }, remove: function() { this.el.removeEventListener("child-attached", this.childAttachedCallback), c(this.children, this.initialPositions) } }), t.exports.getBoxPositions = i, t.exports.getCirclePositions = n, t.exports.getLinePositions = r, t.exports.getCubePositions = o, t.exports.getDodecahedronPositions = a, t.exports.getPyramidPositions = s }]);