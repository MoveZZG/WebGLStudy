// 片元着色器
precision mediump float;
uniform vec4 u_Color; // 接收传来的颜色

void main() {
  vec4 color = u_Color/vec4(255, 255, 255, 1);
  gl_FragColor = color;
}