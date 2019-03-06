precision mediump float;
// 顶点位置
attribute vec2 a_Position;
// 顶点颜色
attribute vec4 a_Color;
// 裁切坐标系
attribute vec2 a_Screen_Size;
// 向片元着色器传参
varying vec4 v_Color;
void main() {
  vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0;
  position = position * vec2(1.0, -1.0);
  gl_Position = vec4(position, 0, 1);
  gl_PointSize = 10.0;
  v_Color = a_Color;
}