if not headA or not headB:
            return None
        
        a,b = headA, headB
        
        while a != b:
            a = a.next
            b = b.next
            if a == b:
                return a
            if a == None:
                a = headB
            if b == None:
                b = headA
        
        return a
