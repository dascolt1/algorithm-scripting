def insertNodeAtPosition(head, data, position):
    i = position
    node = SinglyLinkedListNode(data)
    curr = head
    while curr is not None:
        i -= 1
        if i == 0:
            node.next = curr.next
            curr.next = node
            
            
        curr = curr.next
