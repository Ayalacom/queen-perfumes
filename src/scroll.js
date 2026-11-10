export const scrollMemory = new Proxy({}, {
  get: (_, key) => {
    try {
      const v = sessionStorage.getItem('scroll:' + String(key))
      return v == null ? undefined : Number(v)
    } catch { return undefined }
  },
  set: (_, key, value) => {
    try { sessionStorage.setItem('scroll:' + String(key), String(value)) } catch {}
    return true
  },
})