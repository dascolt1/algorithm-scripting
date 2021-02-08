class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        prev = None
        curr = head
        next = None
        
        while curr != None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        
	return prev
