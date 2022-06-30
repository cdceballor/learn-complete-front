 public class matriz {
 public static void main(String[] args) {

        int[][] g1 = {{0,1,0,0}, {1,0,0,1}, {0,0,1,1}, {0,0,1,1}};
        int[][] g2 = {{0,1,0,1}, {1,0,0,1}, {0,0,1,1}, {0,0,1,1}};
        int r = g1.length;
        int c = g2.length;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (g1[i][j] != g2[i][j]) {
                    g2[i][j] = 1;
                    fill(g2, i, j, 1, 2);
                }
            }
        }
        int count = 0;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (g2[i][j] == 1) {
                    fill(g2, i, j, 1, 0);
                    count++;
                }
            }
        }
        System.out.println(count);
    }

    private static void fill(int[][] image, int sr, int sc, int color, int newColor) {
        if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] != color) return;
        image[sr][sc] = newColor;
        fill(image, sr + 1, sc, color, newColor);
        fill(image, sr - 1, sc, color, newColor);
        fill(image, sr, sc + 1, color, newColor);
        fill(image, sr, sc - 1, color, newColor);
    }
}