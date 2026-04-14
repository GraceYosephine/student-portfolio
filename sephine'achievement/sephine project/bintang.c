#include <stdio.h>

int main() {
    // Loop for 5 rows
    for(int i = 1; i <= 5; i++) {
        for(int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    
    return 0;
}