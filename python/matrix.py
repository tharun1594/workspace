

def readMatrix(m):
    matrix = []
    for i in range(m):
        row = list(map(int, input().split()))
        matrix.append(row)
    return matrix

def main():
    m = int(input())
    n = int(input())
    matrix = readMatrix(m)
    print(matrix)

main()
