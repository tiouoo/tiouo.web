from PIL import Image
import numpy as np

def image_to_rgb_array(image_path):
    try:
        # 1. 打开图片
        img = Image.open(image_path)
        
        # 2. 确保图片是 RGB 模式 (防止是 RGBA 或灰度图)
        img = img.convert('RGB')
        
        # 3. 将图片转换为 NumPy 阵列
        # numpy 默认生成的形状是 (height, width, 3)
        rgb_array = np.array(img)
        
        # 4. 如果你必须要求是标准的 Python List 格式:
        # 注意：对于大图，转成 List 会非常占用内存且缓慢
        rgb_list = rgb_array.tolist()
        
        return rgb_list

    except Exception as e:
        print(f"发生错误: {e}")
        return None

# --- 使用示例 ---
file_path = "input.jpg"  # 替换成你的图片路径
result = image_to_rgb_array(file_path)

if result:
    print(result)