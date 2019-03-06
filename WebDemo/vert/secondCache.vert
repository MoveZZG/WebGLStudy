// 顶点着色器
// 中等精度
precision mediump float;
attribute vec2 a_Position; // 接收传来的 x, y 坐标
attribute vec2 a_Screen_Size; // 接收传来的canvas宽高
void main() {
  vec2 position = (a_Position/a_Screen_Size) *2.0 - 1.0;
  position = position * vec2(1.0, -1.0);
  //  声明顶点位置
  gl_Position = vec4(position, 0 ,1);
  // 声明绘制点大小
  gl_PointSize = 10.0;
}