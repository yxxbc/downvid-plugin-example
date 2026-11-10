// 仅用于验证索引收录流程
export function resolve(url) {
  if (!url.includes('example.com')) return null
  return {
    id: '1',
    title: '示例视频',
    formats: [{ formatId: 'hd', quality: '720P', ext: 'mp4', hasAudio: true }],
  }
}
