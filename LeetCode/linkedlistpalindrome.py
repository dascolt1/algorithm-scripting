class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        
        nodes = []
        curr = head
        
        while curr is not None:
            nodes.append(curr.val)
            curr = curr.next
        
        if nodes == nodes[::-1]:
            return True
        
        return False
