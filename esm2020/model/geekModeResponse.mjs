/**
 * Rock Paper Scissors
 * Randomly resolve rock paper scissors games
 *
 * OpenAPI spec version: 0.0.1-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export var GeekModeResponse;
(function (GeekModeResponse) {
    GeekModeResponse.OpponentHandEnum = {
        ROCK: 'ROCK',
        PAPER: 'PAPER',
        SCISSORS: 'SCISSORS',
        LIZARD: 'LIZARD',
        SPOCK: 'SPOCK'
    };
    GeekModeResponse.ResultEnum = {
        VICTORY: 'VICTORY',
        DEFEAT: 'DEFEAT',
        DRAW: 'DRAW'
    };
})(GeekModeResponse || (GeekModeResponse = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Vla01vZGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGVsL2dlZWtNb2RlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQU1ILE1BQU0sS0FBVyxnQkFBZ0IsQ0FlaEM7QUFmRCxXQUFpQixnQkFBZ0I7SUFFaEIsaUNBQWdCLEdBQUc7UUFDNUIsSUFBSSxFQUFFLE1BQTBCO1FBQ2hDLEtBQUssRUFBRSxPQUEyQjtRQUNsQyxRQUFRLEVBQUUsVUFBOEI7UUFDeEMsTUFBTSxFQUFFLFFBQTRCO1FBQ3BDLEtBQUssRUFBRSxPQUEyQjtLQUNyQyxDQUFDO0lBRVcsMkJBQVUsR0FBRztRQUN0QixPQUFPLEVBQUUsU0FBdUI7UUFDaEMsTUFBTSxFQUFFLFFBQXNCO1FBQzlCLElBQUksRUFBRSxNQUFvQjtLQUM3QixDQUFDO0FBQ04sQ0FBQyxFQWZnQixnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBZWhDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSb2NrIFBhcGVyIFNjaXNzb3JzXG4gKiBSYW5kb21seSByZXNvbHZlIHJvY2sgcGFwZXIgc2Npc3NvcnMgZ2FtZXNcbiAqXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMC4wLjEtU05BUFNIT1RcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBHZWVrTW9kZVJlc3BvbnNlIHsgXG4gICAgb3Bwb25lbnRIYW5kPzogR2Vla01vZGVSZXNwb25zZS5PcHBvbmVudEhhbmRFbnVtO1xuICAgIHJlc3VsdD86IEdlZWtNb2RlUmVzcG9uc2UuUmVzdWx0RW51bTtcbn1cbmV4cG9ydCBuYW1lc3BhY2UgR2Vla01vZGVSZXNwb25zZSB7XG4gICAgZXhwb3J0IHR5cGUgT3Bwb25lbnRIYW5kRW51bSA9ICdST0NLJyB8ICdQQVBFUicgfCAnU0NJU1NPUlMnIHwgJ0xJWkFSRCcgfCAnU1BPQ0snO1xuICAgIGV4cG9ydCBjb25zdCBPcHBvbmVudEhhbmRFbnVtID0ge1xuICAgICAgICBST0NLOiAnUk9DSycgYXMgT3Bwb25lbnRIYW5kRW51bSxcbiAgICAgICAgUEFQRVI6ICdQQVBFUicgYXMgT3Bwb25lbnRIYW5kRW51bSxcbiAgICAgICAgU0NJU1NPUlM6ICdTQ0lTU09SUycgYXMgT3Bwb25lbnRIYW5kRW51bSxcbiAgICAgICAgTElaQVJEOiAnTElaQVJEJyBhcyBPcHBvbmVudEhhbmRFbnVtLFxuICAgICAgICBTUE9DSzogJ1NQT0NLJyBhcyBPcHBvbmVudEhhbmRFbnVtXG4gICAgfTtcbiAgICBleHBvcnQgdHlwZSBSZXN1bHRFbnVtID0gJ1ZJQ1RPUlknIHwgJ0RFRkVBVCcgfCAnRFJBVyc7XG4gICAgZXhwb3J0IGNvbnN0IFJlc3VsdEVudW0gPSB7XG4gICAgICAgIFZJQ1RPUlk6ICdWSUNUT1JZJyBhcyBSZXN1bHRFbnVtLFxuICAgICAgICBERUZFQVQ6ICdERUZFQVQnIGFzIFJlc3VsdEVudW0sXG4gICAgICAgIERSQVc6ICdEUkFXJyBhcyBSZXN1bHRFbnVtXG4gICAgfTtcbn0iXX0=