function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const r = s.trimEnd().split(/\r?\n/).map(l => l.split('\t'));
    if (r.some(a => a.length !== r[0].length)) fail('Rows must have equal widths');
    const fmt = a => '| ' + a.map(x => x.replaceAll('\\', '\\\\').replaceAll('|', '\\|')).join(' | ') + ' |';
    return [fmt(r[0]), fmt(r[0].map(() => '---')), ...r.slice(1).map(fmt)].join('\n')
}
