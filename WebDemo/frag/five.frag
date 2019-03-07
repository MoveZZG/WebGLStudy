precision mediump float;
// 从顶点着色器传过来的数据
varying vec4 v_Color;
void main() {
  vec4 color = v_Color / vec4(255, 255, 255, 1);
  gl_FragColor = color;
}