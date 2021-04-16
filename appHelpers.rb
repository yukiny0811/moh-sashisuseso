helpers do
  def convert_image_source(img)
    base64 = Base64.encode64(img).gsub(/\n/, "") +  "\n"
    return "data:"+ "image/png" + ";base64," + base64
  end
end