export default function handler(req, res) {
  const { pwd } = req.body

  // 你设定的真正密码（不会出现在前端）
  const REAL_PASSWORD = "nowyouseeme";

  if (pwd === REAL_PASSWORD) {
    // 返回成功，并提供跳转页
    return res.status(200).json({
      ok: true,
      next: "/protected.html"
    });
  }

  return res.status(403).json({ ok: false });
}
