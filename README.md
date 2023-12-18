# Giới thiệu
Đoạn code dưới đây dùng để thử nghiệm vẽ đồ thị bằng thư viện cytoscape.js dùng 2 layout là circle và grid. Thư viện cytoscape.js là một thư viện JavaScript cho phép tạo ra các đồ thị tương tác trên trình duyệt web. Các đồ thị có thể bao gồm các nút, cạnh, nhãn, hình ảnh và các thuộc tính khác. Các layout là các thuật toán để sắp xếp các nút và cạnh của đồ thị theo một cách nhất định. Layout circle sắp xếp các nút thành một vòng tròn, còn layout grid sắp xếp các nút thành một lưới đều.

![Ảnh demo](https://github.com/HuyHKr/DemoCytoscape/assets/148759236/c0504332-71af-4d22-804d-d3ade6f4ccaa)
# Vẽ Đồ Thị bằng Cytoscape.js trong Ứng Dụng ReactJS
Khi khởi tạo cytoscape ta cần định nghĩa
  + Container: Đây là phần tử HTML mà cytoscape sẽ vẽ đồ thị lên. Bạn cần đảm bảo rằng container đã được hiển thị trên trình duyệt trước khi khởi tạo cytoscape.
  + Elements: Đây là các thành phần của đồ thị, bao gồm các node (đỉnh) và các edge (cạnh). Mỗi node phải có một id duy nhất và không được trùng lặp với node khác. Mỗi edge phải có source (node nguồn) và target (node đích), và source và target phải tồn tại trong danh sách các node.
  + Style: Đây là cách bạn định dạng cho các node và edge, ví dụ như màu sắc, kích thước, hình dạng, chữ viết, v.v.
  + Layout: Đây là cách bạn sắp xếp các node trên màn hình, ví dụ như grid (lưới), circle (tròn), random (ngẫu nhiên), v.v.
    
Ví dụ:
```
 var cy2 = cytoscape({
            container: document.getElementById('cy2'),
            elements:[
                { group: 'nodes', data: { id: 'A' } },
                { group: 'nodes', data: { id: 'B' } },
                { group: 'nodes', data: { id: 'C' } },
                { group: 'nodes', data: { id: 'D' } },
                { group: 'edges', data: { id: 'E0', source: 'A', target: 'B', weight: 100 } },
              
                { group: 'nodes', data: { id: 'E' } },
                { group: 'nodes', data: { id: 'F' } },
                { group: 'nodes', data: { id: 'G' } },
                { group: 'nodes', data: { id: 'H' } }
            ],
              
              
            style:[
                {
                    selector:'node',
                    style:{
                        label:'data(id)',
                        'text-valign':'center',
                        'text-halign':'center',
                        'background-color':`${color.pink}`,
                        color:`${color.blue}`
                    }
                },
                {
                    selector:'edge',
                    style:{
                        label:'data(weight)',
                        "line-color":`${color.green}`,
                        color:`${color.blue}`,
                        "text-rotation":'autorotate'
                    }
                }
            ],
            layout: {
                name: 'grid',
                cols:4,
                rows:3
              }
        })
```
# Ưu điểm
+ Dễ dàng tạo đồ thị 2D, đồ thị tạo ra rất nhẹ không giật lag
+ Hỗ trợ nhiều phương thức bổ sung để xử lý với đồ thị 
    + `cy.edges('[source = "j"]');`: lấy ra các cạnh có source là 'j'
    + `cy.elements('[weight > 50]');` : lấy ra các phần tử có trọng lượng lớn hơn
    + Thêm 1 cạnh:
           ```
          cy.add({
          group: 'nodes',
          data: { weight: 75 },
          position: { x: 200, y: 200 }
          });
          ```
    + Xóa các node có trọng lượng lớn hơn 50 `cy.remove('node[weight > 50]');`
    + Cho phép chỉnh sửa layout:
      ```
      var layout = cy.layout({
      name: 'random'
      });

      layout.run();
      ```
  # Nhược điểm
Trong React, trạng thái của các component thường được quản lý bằng cách sử dụng useState hoặc useReducer. Tuy nhiên, Cytoscape.js quản lý trạng thái của đồ thị một cách nội tại, điều này có thể gây ra xung đột khi cố gắng đồng bộ hóa trạng thái giữa React và Cytoscape. Không biết có phải do mình tìm hiểu chưa kĩ về React cũng như cytoscape không nhưng nếu muốn thêm các chức năng như thêm node mới, thêm cạnh mới rất khó thực hiện khi dùng react. Giả sử mà tạo đồ thị trực tiếp trong React.Component thì mỗi khi phần tử render lại, việc xóa hay thêm node/edge mới bị loại bỏ. Hoặc nếu khởi tạo đồ thị sau khi render React.Component tức là dùng useEffect với dependences rỗng, thì các hàm thêm nút hay xóa nút phải viết bên trong khối mã đó, không thể thêm vào hàm xử lý sự kiện cho 1 nút nào đó được.

Vòng đời component: Cytoscape.js yêu cầu một phần tử DOM để khởi tạo đồ thị, nhưng phần tử DOM này phải tồn tại trong DOM khi Cytoscape.js được khởi tạo. Điều này có thể gây ra vấn đề với vòng đời component của React, vì React có thể gỡ bỏ và thêm lại các phần tử DOM2.
