class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        nodes = []
        
        while head is not None:
            nodes.append(head)
            head = head.next
            
        middle = len(nodes) // 2
        
        return nodes[middle]
