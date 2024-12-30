#include<iostream>
#include<vector>
#include<unordered_set>
using namespace std;
// 上面的头文件与题解无光,只是为了在本地编译器里不报错

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
// 上面与题解无光

class Solution {
public:
    ListNode* removeDuplicateNodes(ListNode* head) {
        unordered_set<int> myset;
        ListNode* prenode = nullptr;
        ListNode* fastnode = head;
        while (fastnode) {
            if (myset.count(fastnode->val)) {
                prenode->next = fastnode->next;
            } else {
                myset.insert(fastnode->val);
                prenode = fastnode;
            }
            fastnode = fastnode->next;
        }
        return head;
    }
};